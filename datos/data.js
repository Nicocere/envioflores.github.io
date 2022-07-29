export{stockProductos};


 let stockProductos = [
    {id: 1, producto: true, nombre: "Caja Rosas Diamante & Ferrero Rocher", categoria: ["Rosas", "Todos"] , opciones:[
            { tamaño: 12,
             color: ["rosas","rojas","amarillas","blancas"],
             precio: 6500}, 
    
            { tamaño: 18,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 8500}, 
            
            { tamaño: 24,
             color: ["rosas","rojas","amarillas","blancas"],
             precio: 12500}, 
    
            ], tipo: "caja",  flor: "rosas", stock: 1, descr: "Caja con rosas Diamante y Ferrero Rocher" , img: 'imagenes/PRODUCTOS/caja_rosasdiamante_ferrero.jpg'},
        
        
    {id: 2, producto: true, nombre: "Caja Rosas & Ferrero", categoria: ["Rosas", "Todos"] , opciones:[
            { tamaño: 12,
             color: ["rosas","rojas","amarillas","blancas"],
             precio: 5500}, 
    
            { tamaño: 18,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 7500}, 
            
            { tamaño: 24,
             color: ["rosas","rojas","amarillas","blancas"],
             precio: 12500}, 
    
            ], tipo: "caja", flor: "rosas",  stock: 1, descr: "Caja 18 rosas Ferrero" , img: 'imagenes/PRODUCTOS/Caj18RosFer.jpg'},
        
    {id: 3, producto: true, nombre: "Caja Rosas rosadas", categoria: ["Rosas", "Todos"] , opciones:[
                { tamaño: 12,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: 18,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 500}, 
                
                { tamaño: 25,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 13500}, 
        
                ],  tipo: "caja",  flor: "rosas",  stock: 1, descr: "Caja 25 rosas rosadas" , img: 'imagenes/PRODUCTOS/Caj25ROS_ROSADAS.jpg'},
        
    {id: 4, producto: true, nombre: "Corazon de rosas y ferrero rocher", categoria: ["Rosas", "Todos"] , opciones:[
                { tamaño: 20,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 11500}, 
        
                { tamaño: 30,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 17250}, 
                
                { tamaño: 40,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 23000}, 
        
        ], tipo: "arreglo floral", flor: "rosas", stock: 1, descr: "Corazon de rosas y ferrero rocher", img: 'imagenes/PRODUCTOS/corazon_ferrero_Rosas.jpg'},
        
    {id: 5, producto: true, nombre: "Caja de Rosas c/ Ferrero Rocher", categoria: ["Rosas", "Todos"], opciones:[
                { tamaño: 20,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 11500}, 
        
                { tamaño: 35,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 19500}, 
                
                { tamaño: 50,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 28500}, 
                
        
        ], tipo: "caja",  flor: "rosas",   stock: 1, descr: "caja de 50 rosas con ferrero rocher" , img: 'imagenes/PRODUCTOS/Caj50RosFer.jpg'},
        
    {id: 6, producto: true, nombre: "Mini Caja Rosas c/ Peluche", categoria: ["Rosas", "Todos"], opciones:[
                { tamaño: 6,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 4500}, 
    
                { tamaño: 12,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 6500}, 
                
                { tamaño: 18,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 18500}, 
    
        ],  tipo: "caja",  flor: "rosas",   stock: 1, descr: "Mini caja rosas con peluche" , img: 'imagenes/PRODUCTOS/mini_Caja_rosas_peluche.jpg'},
        
    {id: 7, producto: true, nombre: "Florero con Rosas, Lilium y Gerberas", categoria: ["Rosas", "Florero", "Todos"], opciones:[
        { tamaño: "Standard",
        color: ["rosas","rojas","amarillas","blancas"],
         precio: 5500}, 
    
        { tamaño: "Premium",
        color: ["rosas","rojas","amarillas","blancas"],    
        precio: 7500}, 
        
        { tamaño: "Deluxe",
        color: ["rosas","rojas","amarillas","blancas"], 
        precio: 11800}, 
    
        ], tipo: "florero", stock: 1, descr: "Florero con rosas, lilium y gerberas" , img: 'imagenes/PRODUCTOS/florero_rosas_gerberas_lilium.jpg'},
        
    {id: 8, producto: true, nombre: "Florero con rosas en papel italiano",categoria: ["Rosas", "Florero", "Todos"], opciones:[
                
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
        
       ], tipo: "florero", stock: 1, descr: "Florero con rosas en papel italiano" , img: 'imagenes/PRODUCTOS/florero_imperial_rosas.jpg'},
        
    {id: 9, producto: true, nombre: "Florero con Rosas", categoria: ["Rosas", "Florero", "Todos"], opciones: [
                { tamaño: 12,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: 18,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: 24,
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
        
        ],tipo: "florero",  stock: 1, descr: "Florero con rosas rosadas" , img: 'imagenes/PRODUCTOS/florero_rosas_rosadas.jpg'},
        
    {id: 10, producto: true, nombre: "Florero con Lisianthus", categoria: ["Florero", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
            
        ] , tipo: "florero",  stock: 1, descr: "Florero con lisianthus ", img: 'imagenes/PRODUCTOS/florero_lishiantus.jpg'},
        
    {id: 11, producto: true, nombre: "Ramo de Rosas Europeo", categoria: ["Rosas","Ramos", "Todos"], opciones:[
                { tamaño: 6,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 6500}, 
    
                { tamaño: 12,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: 18,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 12500}, 
    
        ],tipo: "florero",  stock: 1, descr: "Ramo de Rosas Europeo" , img: 'imagenes/PRODUCTOS/ramo_rosas_europeo.jpg'},
        
    {id: 12, producto: true, nombre: "Exquisito Florero", categoria: ["Florero", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
        ], tipo: "florero",  stock: 1,  descr: "Exquisito florero" , img: 'imagenes/PRODUCTOS/exquisito_florero.jpg'},
        
    {id: 13, producto: true, nombre: "Florero con Gerberas", categoria: ["Florero", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
    
        ], tipo: "florero", stock: 1, descr: "florero con gerberas" , img: 'imagenes/PRODUCTOS/florero_gerberas.jpg'},
        
    {id: 14, producto: true, nombre: "Florero de Liliums", categoria: ["Florero", "Todos"], opciones:[
                { tamaño: 6,
                color: ["rosas","rojas","blancas"],
                precio: 6500}, 
    
                { tamaño: 12,
                    color: ["rosas","rojas","blancas"],
                    precio: 8500}, 
                
                { tamaño: 18,
                color: ["rosas","rojas","blancas"],
                precio: 12500}, 
    
        ],tipo: "florero",  stock: 1, descr: "florero de 6 liliums" , img: 'imagenes/PRODUCTOS/Florero_6_lilium.jpg'},
        
    {id: 15, producto: true, nombre: "Florero con Rosas y Astromelias", categoria: ["Rosas","Florero", "Todos"],  opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
    
        ], tipo: "florero", stock: 1, descr: "florero con rosas y astromelias" , img: 'imagenes/PRODUCTOS/florero_rosas_astromelias.jpg'},
        
    {id: 16, producto: true, nombre: "Canasta de Rosas con Bombones", categoria: ["Canasta", "Todos"], opciones:[
                { tamaño: 6,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 6500}, 
    
                { tamaño: 12,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: 18,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 12500}, 
    
        ], tipo: "canasta",  stock: 1, descr: "Canasta de Rosas con Bombones" , img: 'imagenes/PRODUCTOS/canasta_24_rosas_con_bombones.jpg'},
        
    {id: 17, producto: true, nombre: "Canasta de Rosas Sin Bombones", categoria: ["Canasta", "Todos"], opciones:[
                { tamaño: 6,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 5500}, 
    
                { tamaño: 12,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 7500}, 
                
                { tamaño: 18,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 11500}, 
    
        ], tipo: "canasta", stock: 1, descr: "Canasta de Rosas Sin Bombones", img: 'imagenes/PRODUCTOS/canasta_24_rosas_sin_bombones.jpg'},
        
    {id: 18, producto: true, nombre: "Canasta con Flores Blancas de Estacion", categoria: ["Canasta", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
    
        ], tipo: "canasta", stock: 1, descr: "canasta con flores blancas de estacion", img: 'imagenes/PRODUCTOS/canasta_floresblancas_Estacion.jpg'},
        
    {id: 19, producto: true, nombre: "Canasta de Gerberas y Rosas", categoria: ["Rosas", "Canasta", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
    
        ], tipo: "canasta",  stock: 1, descr: "canasta de gerberas y rosas" , img: 'imagenes/PRODUCTOS/canasta_gerberas_rosas.jpg'},
        
    {id: 20, producto: true, nombre: "Canasta Rosas y Lilium", categoria: ["Rosas", "Canasta", "Todos"], opciones:[
                { tamaño: 6,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 6500}, 
    
                { tamaño: 12,
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: 18,
                color: ["rosas","rojas","amarillas","blancas"],
                precio: 12500}, 
    
        ], tipo: "canasta",  stock: 1, descr: "canasta rosas y lilum" , img: 'imagenes/PRODUCTOS/canasta_rosas_lilium.jpg'},
        
    {id: 21, producto: true, nombre: "Canasta de Jazmines", categoria: ["Canasta", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
    
        ],tipo: "canasta",  stock: 1, descr: "canasta de jazmines" ,  precio: 3000, img: 'imagenes/PRODUCTOS/canasta_jazmines.jpg'},
        
    {id: 22, producto: true, nombre: "Bandeja Comestible te quiero", categoria: ["Comestible", "Todos"], opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
    
        ], tipo: "comestible", stock: 1, descr: "bandeja comestible te quiero" ,  precio: 4500, img: 'imagenes/PRODUCTOS/bandeja_te_quiero.jpg'},
        
    {id: 23, producto: true, nombre: "Desayuno", categoria: ["Desayuno", "Todos"],opciones:[
                { tamaño: "Standard",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 6500}, 
        
                { tamaño: "Premium",
                    color: ["rosas","rojas","amarillas","blancas"],
                    precio: 8500}, 
                
                { tamaño: "Deluxe",
                 color: ["rosas","rojas","amarillas","blancas"],
                 precio: 12500}, 
    
        ], tipo: "comestible", stock: 1, descr: "desayuno" ,  precio: 5000, img: 'imagenes/PRODUCTOS/desayuno.jpg'},
    ];
    
    JSON.stringify(stockProductos);