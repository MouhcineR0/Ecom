import React, { useEffect, useRef } from 'react';
import { Modal, Button, Form, Input, message } from 'antd';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { AddCategorie, GetCategories } from '../../../features/Category/CategoryFunctions';
import { ResetState, setError } from '../../../features/Category/CategorySlice';

function Ajouter({ open, setOpen, handleOk, handleCancel, disabled, setDisabled, bounds, onStart }) {
	const [form] = Form.useForm();
	const draggleRef = useRef(null);

	const [messageApi, contextHolder] = message.useMessage();

	const dispatch = useDispatch();
	const Category = useSelector(state => state.category);

	const formItemLayout = {
		labelCol: {
			span: 4,
		},
		wrapperCol: {
			span: 14,
		},
	};

	const buttonItemLayout = {
		wrapperCol: {
			span: 14,
			offset: 4,
		},
	};

	const HandleSubmit = async (value) => {
		try {
			await dispatch(AddCategorie(value)).unwrap();
			dispatch(GetCategories(value));
		}
		catch {
			console.log("err");
		}
	}

	const submit = async () => {
		const value = await form.validateFields();
		dispatch(setError(false));
		messageApi.open({
			key: 'loadingAddingCategory',
			duration: 1111111111,
			type: 'loading',
			content: 'Adding Category loading'
		})
		try {
			await dispatch(AddCategorie(value)).unwrap();
			messageApi.destroy('loadingAddingCategory');
			if (Category.error) {
				messageApi.error('Adding Category failed');
			}
			else {
				dispatch(GetCategories(value));
				messageApi.success('Adding Category success');
				setOpen(false);
				form.resetFields();
			}
		}
		catch {
			messageApi.error('Adding Category failed');
		}
	}

	return (
		<>
			{contextHolder}
			<Modal
				title={
					<div
						style={{
							width: '100%',
							cursor: 'move',
						}}
						onMouseOver={() => {
							if (disabled) {
								setDisabled(false);
							}
						}}
						onMouseOut={() => {
							setDisabled(true);
						}}
						onFocus={() => { }}
						onBlur={() => { }}
					>
						Add new Category
					</div>
				}
				visible={open}
				onOk={submit}
				okText={'Submit'}
				onCancel={handleCancel}
				modalRender={(modal) => (
					<Draggable
						disabled={disabled}
						bounds={bounds}
						nodeRef={draggleRef}
						onStart={(event, uiData) => onStart(event, uiData)}
					>
						<div ref={draggleRef}>{modal}</div>
					</Draggable>
				)}
			>
				<Form
					{...formItemLayout}
					layout="horizontal"
					form={form}
					onFinish={HandleSubmit}
					style={{
						maxWidth: 600,
					}}
				>
					<Form.Item label="Name" name={'name'} rules={[{ required: true, min: 2 }]}>
						<Input placeholder="Saisire le Nom de categorie" />
					</Form.Item>
					<Form.Item label="SVG" name={'svg'} rules={[{ required: true, min: 2 }]}>
						<Input placeholder="Saisire l'SVG " />
					</Form.Item>
					{/* <Form.Item {...buttonItemLayout}>
					<Button type="primary" htmlType='submit'>Submit</Button>
				</Form.Item> */}
				</Form>
			</Modal>
		</>
	);
}

export default Ajouter;
