# PuffPastryRC0

How to distribute spreadsheets thanks to a web application.

## scaffolding

```shell
mkdir PuffPastryRC0
cd PuffPastryRC0
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
touch README.md
```
