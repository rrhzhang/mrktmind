import React, { useEffect } from 'react';

const TableauEmbed = () => {
  useEffect(() => {
    const vizDiv = document.getElementById('tableauViz');
    const url = 'https://public.tableau.com/views/Dashboard_17275711456670/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';

    const options = {
      width: '500px',
      height: '500px',
      hideToolbar: true,
      hideTabs: true,
    };

    // Check if Tableau API is available
    if (window.tableau) {
      const viz = new window.tableau.Viz(vizDiv, url, options);
      return () => {
        // Cleanup the viz when the component unmounts
        viz.dispose();
      };
    } else {
      console.error('Tableau API is not available');
    }
  }, []);

  return <div id="tableauViz" style={{ width: '500px', height: '500px' }}></div>;
};

export default TableauEmbed;