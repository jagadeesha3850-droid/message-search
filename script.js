* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: Arial, sans-serif;
  background: white;
  color: #202124;
}

.page {
  width: min(92vw, 620px);
  text-align: center;
}

h1 {
  margin-bottom: 35px;
  color: #4285f4;
  font-size: 70px;
}

.search-box {
  height: 54px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 18px;
  border: 1px solid #dfe1e5;
  border-radius: 28px;
}

.search-box:hover,
.search-box:focus-within {
  border-color: transparent;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
}

.search-box input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
}

button {
  margin-top: 28px;
  padding: 10px 18px;
  border: 1px solid transparent;
  border-radius: 4px;
  background: #f8f9fa;
  font-size: 14px;
  cursor: pointer;
}

button:hover {
  border-color: #dadce0;
}

#status {
  color: #5f6368;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}
