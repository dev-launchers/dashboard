import {
    Upload,
    getValueFromEvent,
    useApiUrl,
    Edit,
    Form,
    Show,
    Input,
    useForm,
} from "@pankod/refine";


export const ShowProject: React.FC = () => {
    const { formProps, saveButtonProps } = useForm();
    const apiUrl = useApiUrl();

    return (
        <Show>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
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
        </Show>
    )
}