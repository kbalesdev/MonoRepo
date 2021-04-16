using System;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.FileProviders;

namespace MonoRepo
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRazorPages();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "Mercury";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseStaticFiles();
            //app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
            });

            app.Map("/dispatch", client =>
            {
                if (env.IsDevelopment())
                {
                    var fileOptions = new StaticFileOptions
                    {
                        FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Mercury/projects/dispatch"))
                    };
                    client.UseSpaStaticFiles(fileOptions);
                    client.UseSpa(spa =>
                    {
                        spa.Options.StartupTimeout = new TimeSpan(0, 5, 0);
                        spa.Options.SourcePath = "Mercury/projects/dispatch";
                        spa.UseAngularCliServer(npmScript: "start:dispatch");
                    });
                }
                else
                {
                    var fileOptions = new StaticFileOptions
                    {
                        FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Mercury/projects/dispatch"))
                    };
                    
                    client.UseSpaStaticFiles(fileOptions);
                    
                    client.UseSpa(spa =>
                    {
                        spa.Options.StartupTimeout = new TimeSpan(0, 5, 0);
                        spa.Options.SourcePath = "Mercury/projects/dispatch";
                        spa.Options.DefaultPageStaticFileOptions = fileOptions;
                    });
                }
            }).Map("/brokerage", client =>
            {
                if (env.IsDevelopment())
                {
                    var fileOptions = new StaticFileOptions
                    {
                        FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Mercury/projects/brokerage"))
                    };
                    client.UseSpaStaticFiles(fileOptions);
                    client.UseSpa(spa =>
                    {
                        spa.Options.StartupTimeout = new TimeSpan(0, 5, 0);
                        spa.Options.SourcePath = "Mercury/projects/brokerage";
                        spa.UseAngularCliServer(npmScript: "start:brokerage");
                    });
                }
                else
                {
                    var fileOptions = new StaticFileOptions
                    {
                        FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Mercury/projects/brokerage"))
                    };

                    client.UseSpaStaticFiles(fileOptions);
                    
                    client.UseSpa(spa =>
                    {
                        spa.Options.StartupTimeout = new TimeSpan(0, 5, 0);
                        spa.Options.SourcePath = "Mercury/projects/brokerage";
                        spa.Options.DefaultPageStaticFileOptions = fileOptions;
                    });
                }
            });
        }
    }
}
