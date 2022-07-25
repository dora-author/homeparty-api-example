window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    //url: "https://petstore.swagger.io/v2/swagger.json",
	//url: "https://idratherbewriting.com/learnapidoc/docs/openapi_spec_and_generated_ref_docs/openapi_openweathermap.yml",
	//url: "./openapi_openweathermap.yml",
   url: "https://dora-author.me/api/pay-api-server-v1.yaml",
    //url: "./pay-api-server-v1.yaml",
	defaultModelsExpandDepth: -1,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
