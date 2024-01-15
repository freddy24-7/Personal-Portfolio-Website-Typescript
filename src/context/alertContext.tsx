import React, { createContext, useContext, useState, ReactNode } from "react";

interface AlertContextProps {
    isOpen: boolean;
    type: "success" | "error";
    message: string;
    onOpen: (type: "success" | "error", message: string) => void;
    onClose: () => void;
}

const initialAlertState: AlertContextProps = {
    isOpen: false,
    type: "success",
    message: "",
    onOpen: () => {},
    onClose: () => {},
};

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

interface AlertProviderProps {
    children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
    const [state] = useState(initialAlertState);

    return (
        <AlertContext.Provider value={state}>
            {children}
        </AlertContext.Provider>
    );
};

export const useAlertContext = (): AlertContextProps => {
    const context = useContext(AlertContext);
    if (context === undefined) {
        throw new Error("useAlertContext must be used within an AlertProvider");
    }
    return context;
};
