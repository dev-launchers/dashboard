import {
    Upload,
    getValueFromEvent,
    useApiUrl,
    Edit,
    Form,
    Input,
    useForm,
    ImageField,
} from "@pankod/refine";

const formInputs = [
    { label: "Slug", name: "slug", required: true },
    { label: "CatchPhrase", name: "catchPhrase", required: true },
    { label: "Title", name: "title", required: true },
    { label: "Description", title: "description", required: true },
    { label: "SignupFormUrl", title: "signupFormUrl", required: false },
    { label: "Is Listed", title: "isListed", required: false },
    { label: "Parent Project", title: "parentProject", required: false },
    { label: "Google Meet", title: "google_meet", required: false },
    { label: "Open Positions", title: "openPositions", required: false },
    { label: "Team Leaders", title: "team.leaders", required: false },
    { label: "Team Members", title: "team.members", required: false },
    { label: "Board", title: "board", required: false },
    { label: "Interests", title: "interests", required: false },
    { label: "Sub-projects", title: "subProjects", required: false },

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

                <Form.Item label="Hero Image">
                    <Form.Item
                        name="image"
                        valuePropName="fileList"
                        getValueFromEvent={getValueFromEvent}
                        noStyle
                    >
                        <Upload.Dragger
                            name="heroImage"
                            action={`${apiUrl}/media/upload`}
                            listType="picture"
                            maxCount={5}
                            multiple
                        >
                            <ImageField
                                value=""
                                title=""
                                width={200}
                            />
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
            </Form>
        </Edit>
    )
}