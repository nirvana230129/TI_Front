import React from 'react';

const Table = ({ stringsData, a = null, b = null, c = null, d = null, batch = null }) => {
    const { original, encoded, corrupted, decoded } = stringsData;

    const rows = original.map((item, index) => {
        const iterableVarIndex = batch !== null ? Math.floor(index / batch) : null;
        return {
            a: Array.isArray(a) ? a[iterableVarIndex] : a,
            b: Array.isArray(b) ? b[iterableVarIndex] : b,
            c: Array.isArray(c) ? c[iterableVarIndex] : c,
            d: Array.isArray(d) ? d[iterableVarIndex] : d,
            original: item,
            encoded: encoded[index],
            corrupted: corrupted[index],
            decoded: decoded[index],
        };
    });

    return (
        <table border="1">
            <thead>
            <tr className="header-row">
                <th>№</th>
                {a !== null && <th>a</th>}
                {b !== null && <th>b</th>}
                {c !== null && <th>c</th>}
                {d !== null && <th>d</th>}
                <th>Исходная строка</th>
                <th>Закодированная строка</th>
                <th>Испорченная строка</th>
                <th>Декодированная строка</th>
            </tr>
            </thead>
            <tbody>
            {rows.map((row, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    {a !== null && <td>{row.a}</td>}
                    {b !== null && <td>{row.b}</td>}
                    {c !== null && <td>{row.c}</td>}
                    {d !== null && <td>{row.d}</td>}
                    <td>{row.original}</td>
                    <td>{row.encoded}</td>
                    <td>{row.corrupted}</td>
                    <td>{row.decoded}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
