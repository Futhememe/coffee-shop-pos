import { useEffect } from "react";
import Layout from "../components/Layout";
import { GlobalStyle } from "../theme/globalStyle";
import { Login } from "../components/Login";
import { defaultTheme } from "../theme/theme";

const IndexPage = () => {
  useEffect(() => {
    const handleMessage = (_event, args) => alert(args);

    // add a listener to 'message' channel
    global.ipcRenderer.addListener("message", handleMessage);

    return () => {
      global.ipcRenderer.removeListener("message", handleMessage);
    };
  }, []);

  const onSayHiClick = () => {
    global.ipcRenderer.send("message", "hi from next");
  };

  return (
    <Layout title="Login | Coffee Shop">
      <Login />
      <GlobalStyle theme={defaultTheme} />
    </Layout>
  );
};

export default IndexPage;
