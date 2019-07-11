clear all;clc;close all;
maxiter = 100;

% Initialization
RE_min = -1.8; RE_max = 0.9;
IM_min = -1; IM_max = 1;
axis([RE_min,RE_max,IM_min, IM_max]);

Nreal = 5000; % # of points in x-direction (real)
Nimag = 5000; % # of points in y-direction (imag)

x = linspace(RE_min, RE_max, Nreal);
y = linspace(IM_min, IM_max, Nimag);

[X,Y] = meshgrid(x,y);
C = complex(X,Y);

ZERO = zeros(size(C));
Z = complex(ZERO, ZERO);
B = ZERO;

% Create the waitbar
h = waitbar(0, 'Computing');

for i = 1:maxiter
    Z = Z.^2 + C;
    B = B + (abs(Z)<2);
    waitbar(i/maxiter);
end
close(h)

% Only show those bounded points
imagesc(B);
% The highest number corresponds to the highest number color in the current
% colormap and the lowest number corresponds to the lowest number color
colorbar
colormap(jet);
title('Mandelbrot Set','fontsize',15)
axis off;