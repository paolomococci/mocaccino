# Estimate.RC1

Web application that offers access to machine learning features.
Stylized using the CSS UIkit framework.

## Scaffolding

### I start by creating the directory that will house the entire project

```shell
mkdir Estimate.RC1
cd Estimate.RC1
```

### I create the file that defines the workspace

```shell
cat <<EOF | tee Estimate.RC1.code-workspace
{
	"folders": [
		{
			"path": "."
		}
	],
	"settings": {}
}
EOF
```

### I continue to define the root of the whole project

```shell
dotnet new gitignore
echo -e "# Estimate.RC1" > README.md
```

### Estimate.Common project

```shell
dotnet new classlib -o Estimate.Common
cd Estimate.Common
rm Class1.cs
dotnet add package ClosedXML --version 0.100.3
dotnet add package Microsoft.ML --version 3.0.0-preview.22621.2
mkdir Models
echo -e "namespace Estimate.Common.Models;\n\npublic class DatasetModel {}" > Models/DomainModel.cs
echo -e "namespace Estimate.Common.Models;\n\npublic class PredictionModel {}" > Models/PredictionModel.cs
echo -e "namespace Estimate.Common.Models;\n\npublic class SchemeModel {}" > Models/SchemeModel.cs
echo -e "namespace Estimate.Common.Models;\n\npublic class ReportModel {}" > Models/ReportModel.cs
echo -e "namespace Estimate.Common.Models;\n\npublic class WorkbookModel {}" > Models/WorkbookModel.cs
mkdir Tests
echo -e "namespace Estimate.Common.Tests;\n\npublic class SchemeModelTest {}" > Tests/SchemeModelTest.cs
```

### Estimate.Mvc.Feather project

```shell
dotnet new web -o Estimate.Mvc.Feather
cd Estimate.Mvc.Feather
dotnet add ./Estimate.Mvc.Feather.csproj reference ../Estimate.Common/Estimate.Common.csproj
mkdir Models
echo -e "namespace Estimate.Mvc.Feather.Models;\n\npublic class ErrorViewModel {}" > Models/ErrorViewModel.cs
echo -e "namespace Estimate.Mvc.Feather.Models;\n\npublic class DataCollectionModel {}" > Models/DataCollectionModel.cs
mkdir Views
touch Views/_ViewImports.cshtml
touch Views/_ViewStart.cshtml
mkdir Views/Shared
touch Views/Shared/_Layout.cshtml
touch Views/Shared/Error.cshtml
mkdir Views/Home
touch Views/Home/Index.cshtml
touch Views/Home/Upload.cshtml
touch Views/Home/Uploaded.cshtml
touch Views/Home/Report.cshtml
mkdir Views/Workbook
touch Views/Workbook/Index.cshtml
mkdir Views/Scheme
touch Views/Scheme/Index.cshtml
mkdir Controllers
echo -e "namespace Estimate.Mvc.Feather.Controllers;\n\npublic class HomeController {}" > Controllers/HomeController.cs
echo -e "namespace Estimate.Mvc.Feather.Controllers;\n\npublic class WorkbookController {}" > Controllers/WorkbookController.cs
echo -e "namespace Estimate.Mvc.Feather.Controllers;\n\npublic class SchemeController {}" > Controllers/SchemeController.cs
mkdir wwwroot
mkdir wwwroot/css
mkdir wwwroot/js
mkdir wwwroot/Store
mkdir wwwroot/Store/datasets
mkdir wwwroot/Store/workbooks
touch wwwroot/css/site.css
touch wwwroot/js/site.js
```

### After that, from within the Estimate.Mvc.Feather directory, I can launch the web application

```shell
dotnet watch run
```

## screenshot

Screenshot of report card:

![report card](screenshots/Estimate_Home_Report_card.png)

Based on the data in the selected spreadsheet, the system uses machine learning to estimate the annual rental cost of a 1650 square foot storage area.
