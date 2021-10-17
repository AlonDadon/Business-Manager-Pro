import { Button, ButtonGroup, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { ChangeEventHandler, FC } from "react"
import { ITodo } from "../../../../store/todo/types"
import { DateTimeInput } from "./DateTimeInput"
import { TxtInput } from "./TxtInput"

export const FormByStep: FC<{
    step: number, handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    title: String, desc: String, setStep: Function, toggleIsOpenEditModal: Function, deadline: string
    startTime: string, addTodo: Function, todo: ITodo
}> = ({ step, handleChange, title, desc, setStep, toggleIsOpenEditModal, startTime, deadline, todo, addTodo }) => {

    const updateStepByDiff = (diff: number) => { setStep(diff += step) }

    switch (step) {
        case 1: return (
            <Box>
                <Typography variant="h6">Step 1: What i went to do?</Typography>
                <TxtInput handleChange={handleChange} title={title} desc={desc} />
                <ButtonGroup>
                    <Button variant="text" onClick={() => toggleIsOpenEditModal(false)} >Cancel</Button>
                    <Button variant="contained" onClick={() => updateStepByDiff(1)}>Next</Button>
                </ButtonGroup>
            </Box>
        )
        case 2: return (
            <Box>
                <DateTimeInput handleChange={handleChange} title={'Step2 when I want to do'} />
                <ButtonGroup>
                    <Button variant="text" onClick={() => updateStepByDiff(-1)}>Prev </Button>
                    <Button variant="contained" onClick={() => updateStepByDiff(1)}>Next</Button>
                </ButtonGroup>
            </Box >
        )
        case 3: return (
            <Box>
                <Typography variant="h6">Step 3: Adding a reminder and importance</Typography>
                <ButtonGroup>
                    <Button variant="text" onClick={() => updateStepByDiff(-1)}>Prev </Button>
                    <Button variant="contained" onClick={() => addTodo(todo)}>Save</Button>
                </ButtonGroup>
            </Box >
        )
        default:
            return <div>The task is save!</div>
    }
}
