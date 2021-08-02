import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listPlates } from "../graphql/queries";
import { processOrder } from "../graphql/mutations";

const PlateContext = React.createContext();

const PlateProvider = ({ children }) => {
  const [plates, setPlates] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPlates();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPlates = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listPlates,
        authMode: "API_KEY"
      });
      const plates = data.listPlates.items;
      const featured = plates.filter((plate) => {
        return !!plate.featured;
        
      });
      setPlates(plates);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  console.log('plates component',plates)
  return (
    <PlateContext.Provider value={{ plates, featured, loading, checkout }}>
      {children}
    </PlateContext.Provider>
  );
};

export { PlateContext, PlateProvider };
