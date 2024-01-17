
export default function Button({text, color, bgColor, padding, fontSize, border}) {
  return (
    <div>
      <button style={{color: color, backgroundColor: bgColor, padding: padding, cursor: 'pointer', border:border, borderRadius: '25px', fontSize: fontSize}}>{text}</button>
    </div>
  )
}; 