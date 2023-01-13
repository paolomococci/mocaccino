# PuffPastryRC0

How to generate and distribute spreadsheets thanks to a web application.

## scaffolding

```shell
mkdir PuffPastryRC0
cd PuffPastryRC0
touch README.md
```

### I create the file that defines the workspace

```shell
cat <<EOF | tee PuffPastryRC0.code-workspace
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
```

### PuffPastry.Common project

```shell
dotnet new classlib -o PuffPastry.Common
cd PuffPastry.Common
rm Class1.cs
dotnet add package ClosedXML --version 0.100.3
mkdir Models
echo -e "namespace PuffPastry.Common.Models;\n\npublic class LedgerModel {}" > Models/LedgerModel.cs
echo -e "namespace PuffPastry.Common.Models;\n\npublic class ItemModel {}" > Models/ItemModel.cs
mkdir Sheet
mkdir Sheet/Templates
echo -e "namespace PuffPastry.Common.Sheet.Templates;\n\npublic class FormulaSheetTemplate {}" > Sheet/Templates/FormulaSheetTemplate.cs
echo -e "namespace PuffPastry.Common.Sheet.Templates;\n\npublic class DatatypeSheetTemplate {}" > Sheet/Templates/DatatypeSheetTemplate.cs
echo -e "namespace PuffPastry.Common.Sheet.Templates;\n\npublic class PinnedSheetTemplate {}" > Sheet/Templates/PinnedSheetTemplate.cs
```

### PuffPastry.Mvc.Feather project

```shell
dotnet new web -o PuffPastry.Mvc.Feather
cd PuffPastry.Mvc.Feather
dotnet add ./PuffPastry.Mvc.Feather.csproj reference ../PuffPastry.Common/PuffPastry.Common.csproj
mkdir Models
echo -e "namespace PuffPastry.Mvc.Feather.Models;\n\npublic class ErrorViewModel {}" > Models/ErrorViewModel.cs
mkdir Views
touch Views/_ViewImports.cshtml
touch Views/_ViewStart.cshtml
mkdir Views/Shared
touch Views/Shared/_Layout.cshtml
touch Views/Shared/Error.cshtml
mkdir Views/Ledger
touch Views/Ledger/Index.cshtml
mkdir Controllers
echo -e "namespace PuffPastry.Mvc.Feather.Controllers;\n\npublic class LedgerController {}" > Controllers/LedgerController.cs
mkdir wwwroot
mkdir wwwroot/css
mkdir wwwroot/js
```
