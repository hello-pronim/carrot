import React from "react";

import async from "./components/Async";

// All pages that rely on 3rd party components (other than Material-UI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";
import LandingLayout from "./layouts/Landing";

// Guards
import AuthGuard from "./guards/AuthGuard";

// Auth components
import SignIn from "./pages/auth/signin/index";
import SignUp from "./pages/auth/signup/index";
import ResetPassword from "./pages/auth/ResetPassword/index";
import Page404 from "./pages/auth/Page404";
import Page500 from "./pages/auth/Page500";

// Components
import Accordion from "./components/mui/Accordion";
import Alerts from "./components/mui/Alerts";
import Avatars from "./components/mui/Avatars";
import Badges from "./components/mui/Badges";
import Buttons from "./components/mui/Buttons";
import Cards from "./components/mui/Cards";
import Chips from "./components/mui/Chips";
import Dialogs from "./components/mui/Dialogs";
import Lists from "./components/mui/Lists";
import Menus from "./components/mui/Menus";
import Pagination from "./components/mui/Pagination";
import Progress from "./components/mui/Progress";
import Snackbars from "./components/mui/Snackbars";
import Tooltips from "./components/mui/Tooltips";

// Form components
import SelectionCtrls from "./components/mui/forms/SelectionControls";
import Selects from "./components/mui/forms/Selects";
import TextFields from "./components/mui/forms/TextFields";

// Icon components
import MaterialIcons from "./components/mui/icons/MaterialIcons";

// Page components
import Blank from "./pages/samples/Blank";
import InvoiceDetails from "./pages/samples/InvoiceDetails";
import InvoiceList from "./pages/samples/InvoiceList";
import Orders from "./pages/samples/Orders";
import Pricing from "./pages/samples/Pricing";
import Settings from "./pages/samples/Settings";
import Projects from "./pages/samples/Projects";
import Chat from "./pages/samples/Chat";

// Table components
import SimpleTable from "./components/mui/tables/SimpleTable";
import AdvancedTable from "./components/mui/tables/AdvancedTable";

// Landing
import Landing from "./pages/landing";
import Start from "./pages/landing/start";

// Protected routes
import ProtectedPage from "./pages/samples/protected/ProtectedPage";

// Dashboard components
const Default = async(() => import("./pages/dashboards/Default"));
const Analytics = async(() => import("./pages/dashboards/Analytics"));
const SaaS = async(() => import("./pages/dashboards/SaaS"));

// Form components
const Pickers = async(() => import("./components/mui/forms/Pickers"));
const Editors = async(() => import("./components/mui/forms/Editors"));
const Formik = async(() => import("./components/mui/forms/Formik"));

// Icon components
const FeatherIcons = async(() => import("./components/mui/icons/FeatherIcons"));
const Profile = async(() => import("./pages/samples/Profile"));
const Tasks = async(() => import("./pages/samples/Tasks"));
const Calendar = async(() => import("./pages/samples/Calendar"));

// Table components
const DataGrid = async(() => import("./components/mui/tables/DataGrid"));

const routes = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "/start",
        element: <Start />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "default",
        element: <Default />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "saas",
        element: <SaaS />,
      },
    ],
  },
  {
    path: "pages",
    element: <DashboardLayout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "blank",
        element: <Blank />,
      },
    ],
  },
  {
    path: "projects",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Projects />,
      },
    ],
  },
  {
    path: "invoices",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <InvoiceList />,
      },
      {
        path: "detail",
        element: <InvoiceDetails />,
      },
    ],
  },
  {
    path: "orders",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Orders />,
      },
    ],
  },
  {
    path: "tasks",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Tasks />,
      },
    ],
  },
  {
    path: "calendar",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Calendar />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  {
    path: "components",
    element: <DashboardLayout />,
    children: [
      {
        path: "accordion",
        element: <Accordion />,
      },
      {
        path: "alerts",
        element: <Alerts />,
      },
      {
        path: "avatars",
        element: <Avatars />,
      },
      {
        path: "badges",
        element: <Badges />,
      },
      {
        path: "buttons",
        element: <Buttons />,
      },
      {
        path: "cards",
        element: <Cards />,
      },
      {
        path: "chips",
        element: <Chips />,
      },
      {
        path: "dialogs",
        element: <Dialogs />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: "menus",
        element: <Menus />,
      },
      {
        path: "pagination",
        element: <Pagination />,
      },
      {
        path: "progress",
        element: <Progress />,
      },
      {
        path: "snackbars",
        element: <Snackbars />,
      },
      {
        path: "tooltips",
        element: <Tooltips />,
      },
    ],
  },
  {
    path: "forms",
    element: <DashboardLayout />,
    children: [
      {
        path: "pickers",
        element: <Pickers />,
      },
      {
        path: "selection-controls",
        element: <SelectionCtrls />,
      },
      {
        path: "selects",
        element: <Selects />,
      },
      {
        path: "text-fields",
        element: <TextFields />,
      },
      {
        path: "editors",
        element: <Editors />,
      },
      {
        path: "formik",
        element: <Formik />,
      },
    ],
  },
  {
    path: "tables",
    element: <DashboardLayout />,
    children: [
      {
        path: "simple-table",
        element: <SimpleTable />,
      },
      {
        path: "advanced-table",
        element: <AdvancedTable />,
      },
      {
        path: "data-grid",
        element: <DataGrid />,
      },
    ],
  },
  {
    path: "icons",
    element: <DashboardLayout />,
    children: [
      {
        path: "material-icons",
        element: <MaterialIcons />,
      },
      {
        path: "feather-icons",
        element: <FeatherIcons />,
      },
    ],
  },
  {
    path: "private",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <ProtectedPage />,
      },
    ],
  },
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

export default routes;
