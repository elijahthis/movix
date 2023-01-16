import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from "@chakra-ui/react";

interface MenuDrawerProps {
	isOpen: boolean;
	onClose: () => void;
	btnRef: any;
}

const MenuDrawer = ({ isOpen, onClose, btnRef }: MenuDrawerProps) => {
	return (
		<div>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Create your account</DrawerHeader>

					<DrawerBody>
						<div>
							<p>Login</p>
							<p>Register</p>
						</div>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default MenuDrawer;
