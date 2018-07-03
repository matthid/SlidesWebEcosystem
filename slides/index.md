- title : ASP.Net & Fable
- description : Backend and Fable Frontend
- author : Matthias Dittrich
- theme : league
- transition : default

***

## ASP.Net Core Backend & Fable Frontend

<img style="border-style: none" border="0" src="images/AIT-Logo_small.jpg" />

### **Matthias Dittrich**, AIT GmbH <br /> [@matthi\_\_d](http://twitter.com/matthi__d) [github matthid](https://github.com/matthid) | [aitgmbh.de](http://www.aitgmbh.de/)

***

### Roadmap

 - **ASP.Net Core**
 - Fable / Elmish

---

### .Net / .Net Core ???

framework available for both runtime.

originally from the ASP.Net team...

* more deployment options (docker)
* X-plat
* modularizarion -> size
* performance

---

### Self hosting

```csharp
    public static IConfiguration Configuration { get; set; }
    public static void Main(string[] args) {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json");

        Configuration = builder.Build();
        CreateWebHostBuilder(args).Build().Run();
    }
    public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
        .UseUrls(Configuration["urls"])
        .UseStartup<Startup>();
```

---

### Configuration

```json
{
    "urls": "http://localhost:8082/"
}
```

Loosely coupled.

```csharp
        .UseUrls(Configuration["urls"])
```

POCO Object (strong type) possible: `IOption<MySetting>`

---

### Startup.cs

```
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime.
        // Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc()
                .AddJsonOptions(options =>
                {
                    // json options
                });
        }
```

' Setup DI Container with services
' Optional

---

### Configure

```csharp
    // This method gets called by the runtime.
    // Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
        if (env.IsDevelopment()) {
            app.UseDeveloperExceptionPage();
        }
        else {
            app.UseHsts();
        }

        //app.UseHttpsRedirection();
        app.UseMvc();
    }
```

---

### Request pipeline

```csharp
public delegate Task RequestDelegate(HttpContext context);
public interface IApplicationBuilder {
  // ...
  IApplicationBuilder Use(Func<RequestDelegate, RequestDelegate> middleware);
}
```

Middleware is a high-order function ;)
Middleware gets the `next` function in the pipeline
Either handles the request, calls `next` or anything in between.

***


### Roadmap

 - ASP.Net Core
 - **Fable / Elmish**

---

### Fable

- F# to JavaScript
- Generates readable JavaScript
- Does NOT support all .NET APIs
- Embraces JavaScript Ecosystem

---

### NPM (node package manager)!

- Part of a nodejs installation
- **No longer required to manually download `*.js` files**
- `packages.json`, `node_modules`

<img src="images/nodejs_npm.png" style="background: white;" width=700 />

---

### Growing ecosystem?

- Lots of small javascript files
- Speed issues (loading lots of javascript files)

---

### Webpack!

"bundle" the javascript application into a single file an minimize download.

tree shaking

"build system"

<img src="images/what-is-webpack.png" style="background: white;" width=600 />

---

### Managing code bases?

- No compiler, no types
- no refactoring

-> Not possible to manage huge code bases

---

### TypeScript!

- Superset of JavaScript
- Typed, feels like working with C#
- Refactoring
- Transpiles to plain JavaScript in the version you choose (ES5 is compatible with most browsers)

<img src="images/typescript.png" style="background: white;" width=200 />

---

### Modern UI Development: React and redux.js

- Separate application state from drawing
- all parts of the application are testable
- not a lot of hidden "magic"
- prevent side-effects

<img src="images/react_redux.png" style="background: white;" width=700 />

' just look at the state

---

### Demo (simple-client):

- npm
- webpack
- typescript
- React & redux.js

***

### Thank you!

* Too many sources, see Sources.txt
* Johannes, Matthias
