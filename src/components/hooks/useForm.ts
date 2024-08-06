import encode from "../../utils/encode";

const useForm = (formName: string) => {
    const handleSubmit = (values: any) => {
        if (values[`bot-field`] === undefined) {
            delete values[`bot-field`];
        }

        fetch(`/`, {
            method: `POST`,
            headers: { 'Content-Type': `application/x-www-form-urlencoded` },
            body: encode({
                'form-name': formName,
                ...values,
            }),
        })
        .then(() => showSuccess())
         .catch(error => showError(error));
    }

    const showSuccess = () => {
        console.log(`Form submitted successfully`);
    };

    const showError = (error: any) => {
        console.log(`There was an error submitting the form`);
        console.log(error);
    };

    return { handleSubmit };
}

export default useForm;