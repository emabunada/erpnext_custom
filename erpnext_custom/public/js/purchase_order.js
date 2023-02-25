frappe.ui.form.on('Purchase Order', {
	setup(frm) {
		frm.set_query("supplier_2", function() {
			return{
				"filters": {
					"supplier_type": ["in", ["Company"]],
				}
			}
		});
	}
})