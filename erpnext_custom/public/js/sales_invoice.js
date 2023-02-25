//from frappe.model.meta import get_field_meta

frappe.ui.form.on('Sales Invoice', {

  customer: function (frm) {
    frm.trigger("customer_value");
  },

	 customer_value: function (frm) {
    if (
      frm.doc.customer != undefined

    ) {
      frappe.call({
        method:
          "erpnext_custom.custom_event.sales_invoice_custom.customer_value",
        args: {
          customer: frm.doc.customer,
        },

        callback: (r) => {
          if(r.message == 0){
	frm.set_df_property("additional_discount_account", "read_only",1)
	frm.doc.additional_discount_account = 0;
	frm.set_df_property("apply_discount_on", "read_only",1)
	frm.set_df_property("additional_discount_percentage", "read_only",1)
	frm.doc.additional_discount_percentage = 0;
	frm.set_df_property("discount_amount", "read_only",1)
	frm.doc.discount_amount = 0;
	  frm.refresh();

          }else{
          	frm.set_df_property("additional_discount_account", "read_only",0)
	frm.set_df_property("apply_discount_on", "read_only",0)
	frm.set_df_property("additional_discount_percentage", "read_only",0)
	frm.set_df_property("discount_amount", "read_only",0)
 frm.refresh();
          }

        },
      });
    }
  },

});

