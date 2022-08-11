import "./hoc.tooltip.css";

export const WithToolTipLeft = (WrappedComponent) => props => {
   const { tipContent, isShow } = props;
   return (
      <div className="tooltip-area w-100">
         {isShow && <span className="tooltiptext">{tipContent}</span>}
         <WrappedComponent {...props} />
      </div >
   )
}

export const WithToolTipCenter = (WrappedComponent) => props => {
   const { tipContent, isShow } = props;
   return (
      <div className="tooltip-area d-flex justify-content-center">
         {isShow && <span className="buttontip">{tipContent}</span>}
         <WrappedComponent {...props} />
      </div >
   )
}