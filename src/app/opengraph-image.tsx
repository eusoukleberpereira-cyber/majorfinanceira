import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MajorFinanceira — Crédito Consignado";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F2647",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "100px",
            padding: "10px 24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#25D366",
            }}
          />
          <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "18px" }}>
            Correspondente Bancário Autorizado
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.15,
            maxWidth: "900px",
            marginBottom: "32px",
          }}
        >
          Crédito Consignado com{" "}
          <span style={{ color: "#C9952A" }}>Aprovação Rápida</span>
          {" "}e as Menores Taxas
        </div>

        {/* Sub */}
        <div style={{ fontSize: "26px", color: "rgba(255,255,255,0.65)", maxWidth: "700px" }}>
          INSS · Servidores Públicos · Militares · CLT · BPC
        </div>

        {/* Logo */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "36px",
            fontWeight: 700,
            color: "white",
          }}
        >
          Major<span style={{ color: "#C9952A" }}>Financeira</span>
        </div>
      </div>
    ),
    size
  );
}
