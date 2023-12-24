with open('./routes') as f:
    ROUTES = f.read().splitlines()

with open('./build/index.html') as f:
    CODE = f.read()

for route in ROUTES:
    with open(f'./build/{route}.html', 'w') as f:
        f.write(CODE)