import { FlatfileButton } from "@flatfile/react";
import { labels } from "../config/config";

const flatfileConfig = {
  type: "Contact",
  fields: [
    { label: labels?.ProductName, key: "name" },
    { label: labels?.ProductBrand, key: "brand" },
    { label: labels?.InventoryCost, key: "cost" },
    { label: labels?.InventoryQuantity, key: "quantity" },
    { label: labels?.InventorySKU, key: "sku" },
    { label: labels?.ProductBrandStyle, key: "brandStyle" },
    { label: labels?.InventoryImages, key: "images" },
    { label: labels?.ProductDescription, key: "description" },
    { label: labels?.ProductAppDescription, key: "appDescription" },
    { label: labels?.ProductStoreDescription, key: "storeDescription" },
    { label: labels?.ProductChargeTaxes, key: "chargeTaxes" },
    { label: labels?.ProductCategories, key: "productCategories" },
    { label: labels?.ProductTaxCode, key: "taxCode" },
    { label: labels?.ProductType, key: "productType" },
    { label: labels?.ProductReceived, key: "productReceived" },
    { label: labels?.ProductShippingPrice, key: "shippingPrice" },
    { label: labels?.ProductLowStockLimit, key: "lowStockLimit" },
    { label: labels?.ProductSplitByType, key: "SplitByType" },
    { label: labels?.ProductOptions, key: "productOptions" },
    { label: labels?.ProductAddons, key: "productAddons" },
    { label: labels?.ProductHideOnWaitlist, key: "hideOnWaitlist" },
    { label: labels?.ProductBestSelling, key: "bestSelling" },
    { label: labels?.ProductNotes, key: "productNotes" },
    { label: labels?.InventoryColor, key: "color" },
    { label: labels?.InventoryWeight, key: "weight" },
    { label: labels?.InventoryRetailPrice, key: "retailPrice" },
    { label: labels?.InventorySalePrice, key: "salePrice" },
    { label: labels?.InventoryBarcode, key: "barCode" },
    { label: labels?.InventoryLength, key: "length" },
    { label: labels?.InventoryWidth, key: "width" },
    { label: labels?.InventoryHeight, key: "heigth" },
    { label: labels?.InventoryPosition, key: "position" },
    { label: labels?.InventoryNotes, key: "inventoryNotes" },
  ],
  managed: true,
};

export default function Home({ license }) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100">
      <label className="block">
        <span className="text-xl font-semibold">Select a CSV file:</span>
        <FlatfileButton
          licenseKey={license}
          customer={{
            companyId: "DT",
            companyName: "Digital Trons LLC.",
            email: "vivek@digitaltrons.com",
            name: "Vivek S",
            userId: "0",
          }}
          settings={flatfileConfig}
          onData={async (results) => {
            // Do something with the data here
            console.log(results);
          }}
        >
          <span className="file-import">Browse CSV file</span>
        </FlatfileButton>
      </label>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      license: process.env.LICENSE,
    },
  };
}
