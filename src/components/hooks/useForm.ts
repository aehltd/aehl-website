const useForm = (formName: string) => {
  const handleFinish = (values: any) => {
    console.log(values);

    // Create a form element for Netlify
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "/"; // Netlify will process the form based on the name attribute

    // Append hidden fields
    Object.keys(values).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = values[key];
      form.appendChild(input);
    });

    const formNameInput = document.createElement("input");
    formNameInput.type = "hidden";
    formNameInput.name = "form-name";
    formNameInput.value = formName; // Form name should match
    form.appendChild(formNameInput);

    // Submit form
    document.body.appendChild(form);
    form.submit();
  };

  return { handleFinish };
};

export default useForm;
