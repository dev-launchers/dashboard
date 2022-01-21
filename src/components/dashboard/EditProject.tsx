import {
    Upload,
    getValueFromEvent,
    useApiUrl,
    Edit,
    Form,
    Input,
    useForm,
} from "@pankod/refine";

const formInputs = [
    { label: "Slug", name: "slug", required: true },
    { label: "CatchPhrase", name: "catchPhrase", required: true },
    { label: "Title", name: "title", required: true },
    { label: "Description", title: "description", required: true },
    { label: "SignupFormUrl", title: "signupFormUrl", required: false },
    { label: "IsListed", title: "isListed", required: false },
];

export const EditProject: React.FC = () => {
    const { formProps, saveButtonProps } = useForm();
    const apiUrl = useApiUrl();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                {formInputs.map(e => {
                    return (
                        <Form.Item
                            key={e.name}
                            label={e.label}
                            name={e.name}
                            rules={[
                                {
                                    required: e.required,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    )
                })}

                <Form.Item label="Image">
                    <Form.Item
                        name="image"
                        valuePropName="fileList"
                        getValueFromEvent={getValueFromEvent}
                        noStyle
                    >
                        <Upload.Dragger
                            name="file"
                            action={`${apiUrl}/media/upload`}
                            listType="picture"
                            maxCount={5}
                            multiple
                        >
                            <p className="ant-upload-text">
                                Drag & drop a file in this area
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
            </Form>
        </Edit>
    )
}