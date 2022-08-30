import { ConfirmationDialogButton } from "./confirmation-dialog-button"

export interface ConfirmationDialogConfig {
    confirmBtn: ConfirmationDialogButton,
    cancelBtn?: ConfirmationDialogButton,
    otherBtn?: ConfirmationDialogButton,
    align?: "start" | "center" | "end" | undefined,
    message: string,
    title: string
}
