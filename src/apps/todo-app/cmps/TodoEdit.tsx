import { FC, useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useForm } from '../../../service/customHooks';
import { Stack, TextField } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import { TxtInput } from './todo-edit/TxtInput';
import { DateTimeInput } from './todo-edit/DateTimeInput';

// const boxStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,

// }

export const TodoEdit: FC<{ isOpenEditModal: any, toggleIsOpenEditModal: Function, addTodo: Function }>
    = ({ isOpenEditModal, toggleIsOpenEditModal, addTodo }) => {
        const [todo, handleChange] = useForm({
            title: '',
            desc: '',
            startTime: '',
            deadline: '',
            reminder: '',
            importance: 0,
        }, () => console.log('cb'))
        const [step, setStep] = useState(1)

        // useEffect(() => {
        //     console.log(title)
        // }, [todo])
        const { desc, deadline, importance, title } = todo

        const FormEditByStep = (props: { step: Number, handleChange: Function }) => {
            switch (step) {
                case 1: return (
                    <Box>
                        <h5>Step 1 what i went to do</h5>
                        <TxtInput handleChange={handleChange} title={title} desc={desc} />
                    </Box>
                )
                case 2: return (
                    <Box>
                        {/* <div>step2 when I want to do </div> */}
                        <DateTimeInput handleChange={handleChange} title={'step2 when I want to do'} />
                    </Box>
                )
                case 3: return (
                    <div>step3 What is the deadline for completing the task</div>
                )
                case 4: return (
                    <div>step4 Adding a reminder and saving the task</div>
                )
                default:
                    return <div>loading...</div>
            }
        }

        return (
            <div>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={isOpenEditModal}
                    onClose={() => toggleIsOpenEditModal(false)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={isOpenEditModal}>
                        <Box component="div" sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: { sx: 300, md: 500 },
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 24,
                            p: 4,
                        }}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Edit modal
                            </Typography>

                            <FormEditByStep handleChange={handleChange} step={step} />

                            {/* <TextField
                                id="todo-title"
                                label="Title"
                                name="title"
                                onChange={handleChange}
                                value={title}
                            /> */}

                            {/* <TextField
                                id="todo-importance"
                                label="Importance"
                                type="number"
                                InputProps={{ inputProps: { min: 0, max: 10 } }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name="importance"
                                onChange={handleChange}
                                value={importance}
                            /> */}
                            {/* <Stack component="form" noValidate spacing={3}>
                                <TextField
                                id="datetime-local"
                                label="Remind me in:"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                sx={{ width: 250 }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                                <TextField
                                id="datetime-local"
                                label="Deadline"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                sx={{ width: '250px' }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                            </Stack> */}

                        </Box>
                    </Fade>
                </Modal>
            </div>
        );
    }

