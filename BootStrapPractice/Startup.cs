using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BootStrapPractice.Startup))]
namespace BootStrapPractice
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
