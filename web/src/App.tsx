import { makeStyles } from "@material-ui/core";
import React, { FunctionComponent, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AdministerRegionsDialog } from "./administerRegions/AdministerRegionsDialog";
import { TopBar } from "./topBar/TopBar";
import { RegionList } from "./region/RegionList";

const queryClient = new QueryClient()

const useStyles = makeStyles(() => ( {
    regionList: {
      marginTop: 50
    }
  }
))

export const App: FunctionComponent = () => {
  const classes = useStyles();
  const [showAdministerDialog, setShowAdministerDialog] = useState(false);

  function renderAdministerDialog() {
    return showAdministerDialog ? <AdministerRegionsDialog onClose={() => setShowAdministerDialog(false)}/> : null
  }

  return (
    <QueryClientProvider client={ queryClient }>
      {renderAdministerDialog()}
      <TopBar showAdministerDialog={() => setShowAdministerDialog(true)}/>
      <div className={ classes.regionList }>
        <RegionList/>
      </div>
      <p>
        Die auf dieser Seite angezeigten Daten stammen vom <a href="https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0/geoservice?geometry=-30.849%2C46.211%2C52.867%2C55.839" target="_blank">RKI</a>.
      </p>
    </QueryClientProvider>
  );
}
