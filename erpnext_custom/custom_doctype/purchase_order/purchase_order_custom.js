//frappe.ui.form.on("Purchase Order", {
//	setup: function(frm) {
//alert("Hello! I am an alert box!!");
//		frm.set_query("Supplier", function() {
//			return {
//			"filters": {
//					"name": ["in", ["Company"]],
//				}
//			}
//		});
//});
//Purchase Order"
// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on('Purchase Order', {
	validate(frm) {
		alert('adsadasd')
	}
})

//	frm.set_query("quotation_to", function() {
//			return{
//				"filters": {
//					"name": ["in", ["Customer", "Lead"]],
//				}
//			}
//		});