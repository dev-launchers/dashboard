import {
    List,
    // TextField,
    TagField,
    DateField,
    Table,
    useTable,
    IResourceComponentsProps,
    Space,
    EditButton,
    ShowButton,
    useMany,
    // FilterDropdown,
    // Select,
    useSelect,
    DeleteButton,
    GetListResponse,
    } from "@pankod/refine";

import { IProject, ICategory } from "./interfaces";


export const ProjectList: React.FC<IResourceComponentsProps<GetListResponse<IProject>>> = 
({ initialData }) => {
    
    const { tableProps } = useTable<IProject>({resource: "projects",queryOptions: {initialData,},});
     
    
    // const categoryIds =
    //     tableProps?.dataSource?.map((item) => item?.id) ?? [];
    // const { data: categoriesData, isLoading } = useMany<ICategory>({
    //     resource: "projects",
    //     ids: categoryIds,
    //     queryOptions: {
    //         enabled: categoryIds.length > 0,
    //     },
    // });

    // const { selectProps: categorySelectProps } = useSelect<ICategory>({
    //     resource: `projects`,
    // });

    return (
        <List>
            <Table {...tableProps} rowKey="slug">
                <Table.Column dataIndex="slug" title="slug" />
                <Table.Column
                    dataIndex="isListed"
                    title="isListed"
                    render={(value) => <TagField value={value} />}
                />
                <Table.Column
                    dataIndex="created_at"
                    title="created_at"
                    render={(value) => <DateField format="LLL" value={value} />}
                />
                {/* <Table.Column
                    dataIndex="interests"
                    title="interests"
                    render={(value) => {
                        if (isLoading) {
                            return <TextField value="Loading..." />;
                        }
                        // console.log(categoriesData?.data);
                        
                        return (
                            <TextField
                                value={
                                    categoriesData?.data.find(
                                        (item) => item.id === value.id,
                                    )?.interests
                                }
                            />
                        );
                    }}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Select
                                style={{ minWidth: 200 }}
                                mode="multiple"
                                placeholder="Select Category"
                                {...categorySelectProps}
                            />
                        </FilterDropdown>
                    )}
                /> */}
                <Table.Column<IProject>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => {
                        // console.log(record);
                       
                        return (
                            <Space>
                                <EditButton
                                    hideText
                                    size="small"
                                    recordItemId={record.slug}
                                    resource="projects"
                                    resourceName={record.id}
                                />
                                {/* <ShowButton
                                    hideText
                                    size="small"
                                    recordItemId={record.id}
                                /> */}
                                <DeleteButton
                                    hideText
                                    size="small"
                                    recordItemId={record.id}
                                />
                            </Space>
                        );
                    }}
                />
            </Table>
        </List>
    );
 };