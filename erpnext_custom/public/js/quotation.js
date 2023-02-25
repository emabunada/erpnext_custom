frappe.ui.form.on('Quotation', {
	setup(frm) {
		frm.set_query("quotation_to", function() {
			return{
				"filters": {
					"name": ["in", ["Customer"]],
				}
			}
		});
	}
})