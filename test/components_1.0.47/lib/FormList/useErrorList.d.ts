import { ReactNode } from 'react';
export interface ErrorListProps {
    errors: ReactNode[];
}
declare const useErrorList: () => ((props: ErrorListProps) => JSX.Element)[];
export default useErrorList;
