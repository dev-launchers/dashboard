import {
    Upload,
    getValueFromEvent,
    useApiUrl,
    Form,
    Show,
    Input,
    useForm,
    ImageField,
} from "@pankod/refine";


const formInputs = [
    { label: "Slug", name: "slug", required: false },
    { label: "CatchPhrase", name: "catchPhrase", required: false },
    { label: "Title", name: "title", required: false },
    { label: "Description", title: "description", required: false },
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

export const ShowProject: React.FC = () => {
    const { formProps, saveButtonProps } = useForm();
    const apiUrl = useApiUrl();

    return (
        <Show>
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
            )
        </Show>
    )
}