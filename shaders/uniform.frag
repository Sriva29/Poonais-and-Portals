uniform float green;
uniform vec3 color;
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    // fragColor = vec4(fragCoord.xy/iResolution.xy, 1.0, 0.9);
    //fragColor = vec4(0,green,0,1);
    fragColor = vec4(color,1);
}