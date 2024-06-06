import React, { useState } from 'react';
import { Table, Form, Select, Empty } from 'antd';

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = React.useRef(null);
    const [form] = Form.useForm();

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form form={form} style={{ margin: 0 }}>
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `${title} is required.`,
                        },
                    ]}
                >
                    <Select ref={inputRef} onPressEnter={save} onBlur={save}>
                        <Select.Option value="Pending">Pending</Select.Option>
                        <Select.Option value="Completed">Completed</Select.Option>
                        <Select.Option value="Cancelled">Cancelled</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{ paddingRight: 24 }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

const TableCommand = () => {
    const [dataSource, setDataSource] = useState([
        {
            key: '1',
            nomComplet: 'John BBBBBrown',
            email: 'john.brown@example.com',
            telephone: '123-456-7890',
            dateCommande: '2024-06-01',
            status: 'Pending',
            nomProduits: 'Produit A',
            quantite: 1,
            prix: 10,
            adresseLivraison: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            nomComplet: 'Jim Green',
            email: 'jim.green@example.com',
            telephone: '123-456-7891',
            dateCommande: '2024-06-02',
            status: 'Completed',
            nomProduits: 'Produit B',
            quantite: 2,
            prix: 20,
            adresseLivraison: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            nomComplet: 'Joe Black',
            email: 'joe.black@example.com',
            telephone: '123-456-7892',
            dateCommande: '2024-06-01',
            status: 'Cancelled',
            nomProduits: 'Produit A',
            quantite: 3,
            prix: 30,
            adresseLivraison: 'Sydney No. 1 Lake Park',
        },
        {
            key: '4',
            nomComplet: 'Jim ssqqq',
            email: 'jim.red@example.com',
            telephone: '123-456-7893',
            dateCommande: '2024-06-02',
            status: 'Pending',
            nomProduits: 'Produit B',
            quantite: 4,
            prix: 40,
            adresseLivraison: 'London No. 2 Lake Park',
        },
    ]);

    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setDataSource(newData);
    };

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const components = {
        body: {
            cell: EditableCell,
        },
    };

    const getUniqueValues = (data, key) => {
        return [...new Set(data.map(item => item[key]))].map(value => ({ text: value, value }));
    };

    const columns = [
        {
            title: 'Nom Complet',
            dataIndex: 'nomComplet',
            filters: getUniqueValues(dataSource, 'nomComplet'),
            onFilter: (value, record) => record.nomComplet.indexOf(value) === 0,
            sorter: (a, b) => a.nomComplet.length - b.nomComplet.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Téléphone',
            dataIndex: 'telephone',
        },
        {
            title: 'Date de Commande',
            dataIndex: 'dateCommande',
            filters: getUniqueValues(dataSource, 'dateCommande'),
            onFilter: (value, record) => record.dateCommande.indexOf(value) === 0,
            sorter: (a, b) => new Date(a.dateCommande) - new Date(b.dateCommande),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            filters: getUniqueValues(dataSource, 'status'),
            onFilter: (value, record) => record.status.indexOf(value) === 0,
            editable: true,
        },
        {
            title: 'Nom Produits',
            dataIndex: 'nomProduits',
            filters: getUniqueValues(dataSource, 'nomProduits'),
            onFilter: (value, record) => record.nomProduits.indexOf(value) === 0,
        },
        {
            title: 'Quantité',
            dataIndex: 'quantite',
        },
        {
            title: 'Prix',
            dataIndex: 'prix',
            filters: getUniqueValues(dataSource, 'prix'),
            onFilter: (value, record) => record.prix.toString().indexOf(value) === 0,
            sorter: (a, b) => a.prix - b.prix,
        },
        {
            title: 'Adresse de Livraison',
            dataIndex: 'adresseLivraison',
        },
    ];

    const columnsWithEditable = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave: handleSave,
            }),
        };
    });

    return (
        <div className='flex gap-5 flex-wrap p-5 rounded-md mt-4 bg-white '>
           {
            dataSource?
            <Table
                style={{ outline:"2px dashed gray" ,
                borderRadius:"5px"}}
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columnsWithEditable}
                onChange={onChange}
                showSorterTooltip={{
                    target: 'sorter-icon',
                }}
            />:<Empty/>
           }
        </div>
    );
};

export default TableCommand;
