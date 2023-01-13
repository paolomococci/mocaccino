# MacaroonRC1

Stylization study thanks to the UIkit front-end framework.

## scaffolding

### I start by creating the directory that will hold the entire project

```shell
mkdir MacaroonRC1
cd MacaroonRC1
```

### I create the file that defines the workspace

```shell
cat <<EOF | tee MacaroonRC1.code-workspace
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

### I create an MVC structure as light as possible

```shell
dotnet new gitignore
touch README.md
dotnet new web -o Macaroon.Web
cd Macaroon.Web
mkdir Models
echo -e "namespace Macaroon.Web.Models;\n\npublic class ErrorViewModel {}" > Models/ErrorViewModel.cs
echo -e "namespace Macaroon.Web.Models;\n\npublic class PostModel {}" > Models/PostModel.cs
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
mkdir Controllers
echo -e "namespace Macaroon.Web.Controllers;\n\npublic class HomeController {}" > Controllers/HomeController.cs
dotnet watch run
```

## screenshots

Home:

![home page](https://github.com/paolomococci/mocaccino/blob/main/screenshots/Macaroon/Macaroon-Home.png)
