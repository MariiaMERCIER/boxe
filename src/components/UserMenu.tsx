import {
  Badge,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
} from "@material-tailwind/react";
import userImg from "@/assets/images/user.png";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export function UserMenu() {
  const { user, isLoading } = useUser();

  return (
    <Menu>
      <MenuHandler>
        <div>
          <Tooltip placement="top" content={user ? "Admin" : "Pas connecté"}>
            <Badge
              placement="bottom-end"
              overlap="circular"
              color={isLoading ? "gray" : user ? "green" : "red"}
              withBorder
            >
              <Image
                src={userImg}
                alt="user"
                width={30}
                className="mt-1 flex flex-initial justify-center cursor-pointer"
              />
            </Badge>
          </Tooltip>
        </div>
      </MenuHandler>
      <MenuList>
        {user ? (
          <MenuItem>
            <a href="/api/auth/logout">Se déconnecter</a>
          </MenuItem>
        ) : (
          <MenuItem>
            <a href="/api/auth/login">Se connecter</a>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
}
