import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Task1Page from './pages/Task1Page';
import Task2Page from './pages/Task2Page';
import Task3Page from './pages/Task3Page';
import Task4Page from './pages/Task4Page';

class App extends React.Component {
    render() {
        return (
            <div className="name">
                <Header title="Задания" />
                <main>
                    <Routes>
                        <Route path="/" element={<Task1Page baseUrl="http://127.0.0.1:8000" />} />
                        <Route path="/task1" element={<Task1Page baseUrl="http://127.0.0.1:8000" />} />
                        <Route path="/task2" element={<Task2Page baseUrl="http://127.0.0.1:8000" />} />
                        <Route path="/task3" element={<Task3Page baseUrl="http://127.0.0.1:8000" />} />
                        <Route path="/task4" element={<Task4Page baseUrl="http://127.0.0.1:8000" />} />
                    </Routes>
                </main>
            </div>
        );
    }
}

export default App;
