const data = {
    name: "Test Object",
    value: 42,
    isActive: true
}
const empty = []
const mapped = Object.fromEntries( Object.entries(data).filter(([key, value]) => value !== 42) );
console.log("empty:", mapped );
