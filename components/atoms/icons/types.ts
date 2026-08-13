export type IconProps = {
  /** 一辺の px。既定値は Font Awesome の fa-2x 相当。 */
  size?: number;
  /**
   * 単体で置くときの読み上げ名。リンクなどで包む場合は指定しない
   * (親側の aria-label が名前になり、二重に読まれるため)。
   */
  label?: string;
};
