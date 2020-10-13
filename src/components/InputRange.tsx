import React from "react";
import { getTrackBackground, Range } from "react-range";
import { clrs } from "./common";

export const InputRange = (
    max: number,
    values: number[],
    setValues: (values: number[]) => void,
    suffix?: string
) => {
    return (
        <>
            <div className="end">0</div>
            <div className="input">
                <Range
                    step={1}
                    min={0}
                    max={max}
                    values={values}
                    onChange={setValues}
                    renderTrack={({ props, children }) => (
                        <div
                            style={{
                                ...props.style,
                                height: "4px",
                                width: "100%",
                                backgroundColor: "#DBE1EA",
                            }}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    height: "5px",
                                    width: "100%",
                                    borderRadius: "4px",
                                    background: getTrackBackground({
                                        values: values,
                                        colors: [clrs.primary, "#DBE1EA"],
                                        min: 0,
                                        max: max,
                                    }),
                                    alignSelf: "center",
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: "16px",
                                width: "16px",
                                backgroundColor: clrs.white,
                                boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "calc(100% + 5px)",
                                    fontSize: 12,
                                    color: clrs.dark,
                                }}
                            >
                                {values[0].toLocaleString("en-US")}
                            </div>
                        </div>
                    )}
                />
            </div>
            <div className="end">
                {max.toLocaleString("en-US")}
                {suffix ?? suffix}
            </div>
        </>
    );
};
