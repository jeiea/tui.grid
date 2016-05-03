tui.util.defineNamespace("fedoc.content", {});
fedoc.content["base_model.js.html"] = "      <div id=\"main\" class=\"main\">\n\n\n\n    \n    <section>\n        <article>\n            <pre class=\"prettyprint source linenums\"><code>/**\n * @fileoverview Base class for Models\n * @author NHN Ent. FE Development Team\n */\n'use strict';\n\nvar common = require('./common');\n\n/**\n * Base class for Models\n * @module base/model\n * @mixes module:base/common\n */\nvar Model = Backbone.Model.extend(/**@lends module:base/model.prototype*/{});\n\n_.assign(Model.prototype, common);\n\nmodule.exports = Model;\n</code></pre>\n        </article>\n    </section>\n\n\n\n</div>\n\n"