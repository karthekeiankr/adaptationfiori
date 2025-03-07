sap.ui.define(
    [
        'sap/ui/core/mvc/ControllerExtension',
         "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
        // ,'sap/ui/core/mvc/OverrideExecution'
    ],
    function (
        ControllerExtension,
        Filter, FilterOperator
        // ,OverrideExecution
    ) {
        'use strict';
        return ControllerExtension.extend("customer.adaptationsmartfilterbar.filter", {
            onInit: function () {
                var oSmartFilterBar = this.getView().byId("mdm.md.customer.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::C_BusinessPartnerCustomer--listReportFilter");
                if (oSmartFilterBar) {
                    oSmartFilterBar.attachFilterChange(this.onFilterChange, this);
                }
            },
    
            // Custom filtering logic before table is bound
            onBeforeRebindTable: function (oEvent) {
                var oBindingParams = oEvent.getParameter("bindingParams");
                var oSmartFilterBar = this.getView().byId("mdm.md.customer.manage::sap.suite.ui.generic.template.ListReport.view.ListReport::C_BusinessPartnerCustomer--listReportFilter");

                   // Get the custom filter value entered by the user
                var sCustomFilterValue = oSmartFilterBar.getFilterData()["CustomField"];
    
                if (sCustomFilterValue) {
                    // Create a new filter for the OData request
                    var oCustomFilter = new Filter("CustomField", FilterOperator.EQ, sCustomFilterValue);
                    oBindingParams.filters.push(oCustomFilter);
                }
            },
    
            // Handling filter change in the SmartFilterBar
            onFilterChange: function (oEvent) {
                var oSmartFilterBar = oEvent.getSource();
                var oCustomFilterValue = oSmartFilterBar.getFilterData()["CustomField"];
    
                if (oCustomFilterValue) {
                    sap.m.MessageToast.show("Custom filter applied: " + oCustomFilterValue);
                }
            }
            // metadata: {
            // 	// extension can declare the public methods
            // 	// in general methods that start with "_" are private
            // 	methods: {
            // 		publicMethod: {
            // 			public: true /*default*/ ,
            // 			final: false /*default*/ ,
            // 			overrideExecution: OverrideExecution.Instead /*default*/
            // 		},
            // 		finalPublicMethod: {
            // 			final: true
            // 		},
            // 		onMyHook: {
            // 			public: true /*default*/ ,
            // 			final: false /*default*/ ,
            // 			overrideExecution: OverrideExecution.After
            // 		},
            // 		couldBePrivate: {
            // 			public: false
            // 		}
            // 	}
            // },
            // // adding a private method, only accessible from this controller extension
            // _privateMethod: function() {},
            // // adding a public method, might be called from or overridden by other controller extensions as well
            // publicMethod: function() {},
            // // adding final public method, might be called from, but not overridden by other controller extensions as well
            // finalPublicMethod: function() {},
            // // adding a hook method, might be called by or overridden from other controller extensions
            // // override these method does not replace the implementation, but executes after the original method
            // onMyHook: function() {},
            // // method public per default, but made private via metadata
            // couldBePrivate: function() {},
            // // this section allows to extend lifecycle hooks or override public methods of the base controller
            // override: {
            // 	/**
            // 	 * Called when a controller is instantiated and its View controls (if available) are already created.
            // 	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
            // 	 * @memberOf {{controllerExtPath}}
            // 	 */
            // 	onInit: function() {
            // 	},
            // 	/**
            // 	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
            // 	 * (NOT before the first rendering! onInit() is used for that one!).
            // 	 * @memberOf {{controllerExtPath}}
            // 	 */
            // 	onBeforeRendering: function() {
            // 	},
            // 	/**
            // 	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
            // 	 * This hook is the same one that SAPUI5 controls get after being rendered.
            // 	 * @memberOf {{controllerExtPath}}
            // 	 */
            // 	onAfterRendering: function() {
            // 	},
            // 	/**
            // 	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
            // 	 * @memberOf {{controllerExtPath}}
            // 	 */
            // 	onExit: function() {
            // 	},
            // 	// override public method of the base controller
            // 	basePublicMethod: function() {
            // 	}
            // }
        });
    }
);
