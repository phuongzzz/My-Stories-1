module ApplicationHelper
  def link_to_add_fields name, field, association
    new_object = field.object.send(association).klass.new
    id = new_object.object_id
    fields = field.fields_for(association, new_object, child_index: id) do |builder|
      render(association.to_s.singularize + "_fields", field: builder)
    end
    link_to(name, "#", class: "add_step_fields btn btn-primary",
      data: {id: id, fields: fields.delete("\n", "")})
  end
end
