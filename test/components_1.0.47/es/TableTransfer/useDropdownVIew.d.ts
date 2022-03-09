export interface DropdownViewProps {
    menuItems: MenuItemsProps[];
    className: string;
}
interface MenuItemsProps {
    title: string;
    onClick: Function;
}
declare const useDropdownView: ({ menuItems, className }: DropdownViewProps) => {
    DropdownView: () => JSX.Element;
};
export default useDropdownView;
