import { Button } from "@/stories/atoms/Button/Button";
import styles from "./header.module.css";

type User = {
  name: string;
};

type Navigation = {
  text: string;
  url: string;
};

type Navigations = Navigation[];

export interface HeaderProps {
  title?: string;
  logoUrl?: string;
  user?: User;
  navigations?: Navigations;
  isDark?: boolean;
  isFixed?: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

export const Header = ({
  title = "PenPeen",
  logoUrl = "./vite.svg",
  user,
  navigations,
  isDark = false,
  isFixed = false,
  onLogin = () => {},
  onLogout = () => {},
}: HeaderProps) => {
  const mode = [styles.o_header];
  if (isFixed) {
    mode.push(styles.o_header__fixed);
  }
  if (isDark) {
    mode.push(styles.o_header__dark);
  }
  const buttonType = isDark ? "neutral" : "primary";

  return (
    <header className={mode.join(" ")}>
      <div>
        <div className={styles.o_header__left_contents}>
          <a href='/' className={styles.o_header__top_link}>
            {logoUrl && (
              <img className={styles.o_header__logo} src={logoUrl} alt='logo' />
            )}
            {title && <h1 className={styles.o_header__title}>{title}</h1>}
          </a>
          {navigations ? (
            <nav className={styles.o_header__navigation}>
              <ul className={styles.o_header__navigation_ul}>
                {navigations.map((navigation) => {
                  return (
                    <li>
                      <a href={navigation.url}>{navigation.text}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        {user ? (
          <>
            <Button
              type={buttonType}
              size='small'
              handleClick={onLogout}
              label='Log out'
            />
          </>
        ) : (
          <>
            <Button
              type={buttonType}
              size='small'
              handleClick={onLogin}
              label='Log in'
            />
          </>
        )}
      </div>
    </header>
  );
};
