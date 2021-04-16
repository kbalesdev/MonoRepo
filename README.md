# MonoRepo
Angular project test with the MonoRepo pattern

To get project to build you will need to add an appsettings.json file to both projects with this structure:
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "TestConnection": "Can add your own connection string here to local database" // ConnectionStrings not required in the MonoRepo project, just the MonoRepoApi
  }
}
