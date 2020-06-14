export interface Theme {
  fontColor: string;
  panelBackgroundColor: string;
  backgroundColor: string;
  layoutSeperatorColor: string;
  tabsBorderColor: string;
  tabsBackgroundColor: string;
  tabBackgroundColor: string;
}

export const LightTheme: Theme = {
  fontColor: "#182026",
  panelBackgroundColor: "#ffffff",
  backgroundColor: "#f5f8fa",
  layoutSeperatorColor: "#bbbbbb33",
  tabsBorderColor: "#aaaaaa",
  tabsBackgroundColor: "#0000000d",
  tabBackgroundColor: "#ffffff"
};

export default {
  LightTheme
}